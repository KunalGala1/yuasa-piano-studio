import * as React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Hr,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface InquiryEmailProps {
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

export const InquiryEmail: React.FC<Readonly<InquiryEmailProps>> = ({
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
  <Html lang="en">
    <Tailwind>
      <Body className="bg-slate-100 m-auto font-serif p-2 text-slate-900">
        <Container className="border border-slate-200 rounded my-16 mx-auto p-5 max-w-[465px]">
          <Heading className="font-bold text-lg text-center my-7">
            Yuasa Piano Studio
          </Heading>

          <Text>
            New Inquiry from{" "}
            <strong>
              {firstName} {lastName}
            </strong>
            !
          </Text>
          <Text>
            Email: <strong>{email}</strong>
          </Text>
          <Text>
            Phone: <strong>{phoneNumber}</strong>
          </Text>
          <Hr className="border border-solid border-[#eaeaeac] my-[26px] mx-0 w-full" />

          <Text>
            <strong>Address:</strong>
          </Text>
          <Text>
            Address Line 1: <strong>{addressLine1}</strong>
          </Text>
          <Text>
            Address Line 2: <strong>{addressLine2}</strong>
          </Text>
          <Text>
            City: <strong>{city}</strong>
          </Text>
          <Text>
            State: <strong>{state}</strong>
          </Text>
          <Text>
            Zip Code: <strong>{zipCode}</strong>
          </Text>

          <Hr className="border border-solid border-[#eaeaeac] my-[26px] mx-0 w-full" />

          <Text>Student Information</Text>
          <Text>
            Name: <strong>{studentName}</strong>
          </Text>
          <Text>
            Age: <strong>{age}</strong>
          </Text>
          <Text>Previous Musical Experience</Text>
          <Text className="p-4 bg-slate-300 rounded shadow">
            {previousMusicExperience}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default InquiryEmail;
