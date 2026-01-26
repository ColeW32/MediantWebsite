import * as brevo from '@getbrevo/brevo';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, spend, goal } = req.body;

    // Validate required fields
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Brevo API client
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    // Create the email content
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `New ROI & CPA Audit Request from ${name}`;
    sendSmtpEmail.to = [{ email: 'cole@mediant.group', name: 'Cole' }];
    sendSmtpEmail.sender = { 
      name: 'Mediant Contact Form', 
      email: 'noreply@mediant.group' // You'll need to verify this domain in Brevo
    };
    sendSmtpEmail.replyTo = { email: email, name: name };
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 900;
          }
          .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
          }
          .field-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #6b7280;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .field-value {
            font-size: 16px;
            color: #111827;
            font-weight: 600;
          }
          .goal-section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            border-left: 4px solid #7c3aed;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            color: #6b7280;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🚀 New ROI & CPA Audit Request</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">Company Domain</div>
            <div class="field-value">${company}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Monthly Spend Target</div>
            <div class="field-value">${spend}</div>
          </div>
          
          <div class="goal-section">
            <div class="field-label">Target CPA & Yield Goal</div>
            <div class="field-value" style="white-space: pre-wrap;">${goal || 'Not provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Mediant website contact form</p>
          <p>Submitted on ${new Date().toLocaleString('en-US', { 
            dateStyle: 'full', 
            timeStyle: 'short',
            timeZone: 'America/New_York'
          })} ET</p>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}


