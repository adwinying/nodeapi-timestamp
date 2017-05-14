# FCC API: Timestamp Microservice

## Summary
Takes in either unix timestamps or natural dates (eg. January 1, 1970) 
and returns a JSON object with both the unix timestamp and natural date.

## Usage

```http://someurl.com/[timestamp]```

## Example

### Input
```http://someurl.com/December%2015,%202015```
```http://someurl.com/1450137600```

### Output
```{ "unix": 1450137600, "natural": "December 15, 2015" }```