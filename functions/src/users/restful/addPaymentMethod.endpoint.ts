import {
  Request,
  Response,
} from 'express';
import {
  Endpoint,
  RequestType,
} from 'firebase-backend';

import * as bcrypt from 'bcrypt';

export default new Endpoint(
  'addPaymentMethod',
  RequestType.POST,
  (request: Request, response: Response) => {
    const cardNumber = request.body['cardNumber'];
    const cardHolder = request.body['cardHolder'];

    const paymentToken = bcrypt.hashSync(cardNumber + cardHolder, 12);

    return response.status(201).send({
      token: paymentToken
    })
  }
)
