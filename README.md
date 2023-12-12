> [!NOTE]  
> Branch with tests - [link](https://github.com/OAMK-VPN/ParcelLocker_Frontend/tree/tests)


## Installation
1. Clone the repo
```sh
git clone https://github.com/OAMK-VPN/APost.git
```
2. Go to the folder and install dependencies `(npm i / pnpm i)`
```sh
cd  ParcelLocker_Frontend
npm install / pnpm install
```
3. Update Endpoints in `.env` (if needed)

## Usage
1. Run the server
```sh
cd server
mvn spring-boot:run
```
2. Run the client
```sh
cd client/customer
cd client/driver
cd client/locker
npm run dev
```


## Available scripts
- `npm run dev`  - Runs the app in the development mode
- `npm run build` - Builds the app for production to the dist folder
- `npm run preview` - Previews the app for production using dev server
- `npm run test` - Runs tests
