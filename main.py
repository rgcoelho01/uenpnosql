import webapp2

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.redirect("/static/index.html");

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
