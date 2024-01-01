import * as React from 'react';

interface ConfirmationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  studentName: string;
  age: string;
  previousMusicExperience: string;
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  addressLine1,
  addressLine2,
  city,
  state,
  zipCode,
  studentName,
  age,
  previousMusicExperience,
}) => (
  <div>
    <p>
      Thank you for contacting the Yuasa Piano Studio! I will be in touch
      shortly.
    </p>
    <p>You can also reply to this email to get in touch.</p>
    <p>Here is a record of your inquiry:</p>
    <p>
      Name:{' '}
      <strong>
        {firstName} {lastName}
      </strong>
    </p>
    <p>
      Email: <strong>{email}</strong>
    </p>
    <p>
      Phone: <strong>{phoneNumber}</strong>
    </p>
    <hr />
    <p>
      <strong>Address:</strong>
    </p>
    <p>
      Address Line 1: <strong>{addressLine1}</strong>
    </p>
    <p>
      Address Line 2: <strong>{addressLine2}</strong>
    </p>
    <p>
      City: <strong>{city}</strong>
    </p>
    <p>
      State: <strong>{state}</strong>
    </p>
    <p>
      Zip Code: <strong>{zipCode}</strong>
    </p>
    <hr />
    <p>
      <strong>Student Information:</strong>
    </p>
    <p>
      Name: <strong>{studentName}</strong>
    </p>
    <p>
      Age: <strong>{age}</strong>
    </p>
    <p>
      <strong>Previous Musical Experience</strong>
    </p>
    <p>{previousMusicExperience}</p>
  </div>
);

export default ConfirmationEmail;
