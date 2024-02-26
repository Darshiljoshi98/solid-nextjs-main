
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  phone:string;
  subject:string;
  email:string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,phone,subject,email
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h1>{phone}</h1>
    <h1>{subject}</h1>
    <h1>{email}</h1>
  </div>
);
