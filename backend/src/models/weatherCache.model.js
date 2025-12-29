import mongoose, { Schema } from "mongoose";

const weatherCacheSchema = new Schema({
  city: {
    type: String,
    index: true,
  },
  country: {
    type: String,
  },
  weatherData: {
    type: Object,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    index: { expires: 0 },
  },
});

export const WeatherCache = new mongoose.model(
  "WeatherCache",
  weatherCacheSchema
);
