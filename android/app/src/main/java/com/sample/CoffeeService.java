package com.sample;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;
import java.io.InputStream;


public class CoffeeService extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public CoffeeService(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNCoffeeService";
    }
    
    @ReactMethod
    public void getData(String type, final Promise promise) {
        String  fixtureDirectory = "Fixtures/";
        try {
            InputStream is = this.reactContext.getAssets().open(fixtureDirectory+type+".json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            String json = new String(buffer, "UTF-8");
            promise.resolve(json);
        } catch (IOException ex) {
            ex.printStackTrace();
            promise.reject("Error","Couldn't find file!");
        }
    }
}
