# FCC API: Timestamp Microservice

## Summary
Takes in either unix timestamps or natural dates (eg. January 1, 1970) 
and returns a JSON object with both the unix timestamp and natural date.

## Usage

```http://timestamp.nodejs.iadw.in/[timestamp]```

## Example

### Input
```http://timestamp.nodejs.iadw.in/December%2015,%202015```

```http://timestamp.nodejs.iadw.in/1450137600```

### Output
```{ "unix": 1450137600, "natural": "December 15, 2015" }```