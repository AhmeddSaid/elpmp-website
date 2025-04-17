# ELPMP.COM Student portal [DOCKER & NEXT JS]

This project is build with next js on a docker using npm and node js for more about docker with next js
see [deployment documentation](https://nextjs.org/docs/deployment#docker-image).

## How to use

```bash
npm i
```

Enter the values in the `.env.staging`, `.env.production` files to be used for
each environment.

## Using Docker and Makefile

### Staging environment - for doing UAT testing

```
make build-staging
make start-staging
```

Open http://localhost:3002

### Production environment - for users

```
make build-production
make start-production
```

Open http://localhost:3003

## Running Locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
