import jwt from 'jsonwebtoken';

class TokenProvider {

  verify(token: string): boolean {
    try {
      jwt.verify(token, process.env.SECRET_KEY!);
      
      return true;
    } catch (err) {
      return false;
    }
  }

  sign(payload: string | object | Buffer, options?: jwt.SignOptions | object | undefined): any {
    const token = jwt.sign(payload, process.env.SECRET_KEY!, { expiresIn: '7d' });

    return token;
  }

}

const tokenProvider = new TokenProvider();

export { tokenProvider };