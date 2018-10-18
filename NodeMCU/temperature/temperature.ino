#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

#define DHTTYPE DHT11
#define dht_dpin 0

DHT dht(dht_dpin, DHTTYPE); 
const char ssid[]="Enzo_NET";
const char pass[]="1234567890123";
const char host[] = "http://192.168.0.187:8080/temperature";

void setup() {
  dht.begin();
  Serial.begin(115200);
  delay(500);
  Serial.print("Connecting to..");
  Serial.println(ssid);
  delay(500);
  WiFi.disconnect();
  WiFi.begin(ssid,pass);
  while(WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.println(".");
  }
  Serial.println (WiFi.SSID());
  Serial.println("Successfully connected!!!");
  Serial.print("IP Address allotted to NodeMcu ESP..");
  Serial.println(WiFi.localIP());
}

void loop()
{  
  if(WiFi.status()== WL_CONNECTED){
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    StaticJsonBuffer<300> JSONbuffer;
    JsonObject& JSONencoder = JSONbuffer.createObject(); 
 
    JSONencoder["temperature"] = t;
    JSONencoder["humidity"] = h;
    JSONencoder["locationId"] = 2;
 
    char JSONmessageBuffer[300];
    JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
    Serial.println(JSONmessageBuffer);
 
    HTTPClient http;
 
    http.begin(host);
    http.addHeader("Content-Type", "application/json");
 
    int httpCode = http.POST(JSONmessageBuffer);
    String payload = http.getString();
 
    Serial.println(httpCode);
    // Serial.println(payload);
 
    http.end();
  }else{
    Serial.println("Error sending POST data");   
  }
  delay(60000);
}
