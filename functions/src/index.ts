import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import { Matches } from "./agent";
import { parseQueryToRequestOptions } from "./Utils/parseQueryToRequestOptions";

const app = express();
app.use(cors());

app.get("/matches", async (req, res, next) => {
  try {
    const matches = await Matches.list(
      parseQueryToRequestOptions(
        req.query,
        { last: 20 }
      )
    );
    res.send(matches);
  } catch (ex) {
    next(ex);
  }
});

app.get("/matches/rounds", async (req, res, next) => {
  try {
    const match = await Matches.rounds(
      parseQueryToRequestOptions(req.query, { league: 39, season: 2014 })
    );
    res.send(match);
  } catch (ex) {
    next(ex);
  }
});

exports.app = functions.https.onRequest(app);
