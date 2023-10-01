<h1>NestCarReportAPI</h1>

<p>Welcome to the NestCarReportAPI repository! This repository contains a Nest.js-based API for car reporting and estimation.</p>

<h2>API Paths</h2>

<h3>Authentication</h3>

<p>- <code>POST /auth/signup</code>: Sign up for a new account.</p>
<div class="code">
<p>Request Body:</p>
<pre>

{
"name": "Your Name",
"email": "your@email.com",
"password": "your_password"
"admin": "true/false"
}

</pre>
</div>

<p>- <code>POST /auth/signin</code>: Sign in to your account.</p>
<div class="code">
<p>Request Body:</p>
<pre>

{
"email": "your@email.com",
"password": "your_password"
}

</pre>
</div>

<p>- <code>POST /auth/signout</code>: Sign out from your account.</p>
<p>Requires authentication using a bearer token.</p>

<h3>Car Reports</h3>

<p>- <code>POST /api/reports/create</code>: Create a new car report.</p>
<div class="code">
<p>Request Body:</p>
<pre>

{
"make": "Toyota",
"model": "Camry",
"year": 2020,
"mileage": 50000,
"lng": 123.456,
"lat": 45.678,
"price": 20000
}

</pre>
</div>

<p>- <code>GET /api/reports/estimate</code>: Get an estimate for a car based on its details.</p>
<p>Query Parameters:</p>
<pre>

make (string): The car's make.
model (string): The car's model.
year (number): The car's year (between 1930 and 2050).
mileage (number): The car's mileage (between 0 and 1,000,000).
lng (number): The car's longitude.
lat (number): The car's latitude.
price (number): The car's price (between 0 and 1,000,000).

</pre>

<p>- <code>PUT /api/reports/update/{report_id}</code>: Update an existing car report.</p>
<div class="code">
<p>Request Body:</p>
<pre>

{
"mileage": 55000,
"price": 21000
}

</pre>
</div>

<p>- <code>DELETE /api/reports/delete/{report_id}</code>: Delete a car report by its ID.</p>
<p>Requires authentication using a bearer token.</p>

<h2>Nest.js Installation Guide</h2>

<p>To run this NestCarReportAPI project locally or deploy it to a server, follow these steps:</p>

<ol>
<li>Clone this repository to your local machine:</li>
</ol>
<div class="code">
<p>git clone https://github.com/pro-shubham-jain/NestCarReportAPI.git</p>
</div>

<ol start="2">
<li>Navigate to the project directory:</li>
</ol>
<div class="code">
<p>cd NestCarReportAPI</p>
</div>

<ol start="3">
<li>Install project dependencies:</li>
</ol>
<div class="code">
<p>npm install</p>
</div>

<ol start="4">
<li>Create a <code>.env</code> file in the project root and configure any environment-specific settings, such as database connection information and secret keys.</li>
</ol>

<ol start="5">
<li>Start the application:</li>
</ol>
<div class="code">
<p>npm start</p>
</div>

<p>The API should now be running locally at <code>http://localhost:3000</code>. You can make requests to the API using the provided endpoints.</p>

<p>If you have any questions or need further assistance, please refer to the documentation or contact our support team.</p>

<p>Happy coding!</p>
