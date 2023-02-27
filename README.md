# CPU Project

Technical exercise for internship at [Nubedian](https://nubedian.de/).

## Getting Started

1. Clone the repository:
   `git clone https://github.com/hugopino/cpu-project`
2. Navigate to the backend folder:
   `cd cpu-backend`
3. Start the Docker containers:
   `docker compose built && docker compose up -d`
4. Navigate to the frontend folder:
   `cd ../cpu-frontend`
5. Install the necessary packages:
   `npm i`
6. Start the frontend server:
   `npm start`

## Optional: connect to pgadmin

1. Go to http://localhost:9090/
2. Login:
   - Email: admin@admin.admin
   - Password: admin
3. Right click on Servers > Register > Server
4. Fill the "Name" field with the name of your choice. Example: db_cpu
5. In the "Connection" tab:
   - Host name/address: db
   - Maintenance database: cpudb
   - Username: root
   - Password: rootcpudb
6. Click save
