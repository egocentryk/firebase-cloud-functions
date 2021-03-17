import * as functions from 'firebase-functions';

exports.onUserCreated = functions
  .firestore
  .document('users/{userId')
  .onCreate((userSnapshot, context) => {
    const data = userSnapshot.data();

    // testing
    console.log(
      `User successfully created | email to ${data.email} was sent!`
    );
  });
