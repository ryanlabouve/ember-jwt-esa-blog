import Mirage from 'ember-cli-mirage';
export default function() {
  this.get('/public-posts');
  this.post('/knock/auth_token', (db, request) =>  {
    const req = JSON.parse(request.requestBody);
    const pw = Ember.get(req, 'auth.password');

    if(pw === 'test1234') {
      return new Mirage.Response(201, {}, { jwt: 'hotdog' });
    } else {
      return new Mirage.Response(404, {}, {});
    }
  });
  this.get('/private-posts', ({ privatePost }, request) => {
    const token = Ember.get(request, 'requestHeaders.Authorization');
    if (token === 'Bearer hotdog') {
      return privatePost.all();
    } else {
      return new Mirage.Response(401, {}, {});
    }
  });
}
