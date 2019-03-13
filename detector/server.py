from http.server import BaseHTTPRequestHandler, HTTPServer
import pickle
from urllib.parse import parse_qsl


def detecting_fake_news(text):    
   load_model = pickle.load(open('final_model.sav', 'rb'))
   prediction = load_model.predict(text)
   prob = load_model.predict_proba(text)

   result = "The given statement is {0}\t".format(prediction[0])
   result += "The truth probability score is {0}".format(prob[0][1])

   return result


class Server(BaseHTTPRequestHandler):
    
    def do_GET(self):
           if "/detector" in self.path:
               self.send_response(200)
               self.send_header('Access-Control-Allow-Origin', '*')
               self.send_header("Content-type", "application/json")
               self.end_headers()
               
               text = parse_qsl(self.path)
               response = {"key": detecting_fake_news(list(text[0][1]))}
               self.wfile.write(response, "UTF-8")
           return

        
### MAIN ###
if __name__ == "__main__":

   try:
       PORT_NUM = 7777
       _server = HTTPServer(("localhost", PORT_NUM), Server)
       print("Started server on port: ", PORT_NUM)
       
       _server.serve_forever()

   except KeyboardInterrupt:
           print("Shutting down the server")
           server.socket.close()
