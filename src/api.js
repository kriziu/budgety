const jsonServer = require('json-server');
const express = require('express');
const serverless = require('serverless-http');

const server = express();

server.use('/.netlify/functions/api', jsonServer.router('db.json'));

module.exports.handler = serverless(server);
