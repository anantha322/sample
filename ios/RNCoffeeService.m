//
//  RNCoffeeService.m
//  Sample
//
//  Created by Anantha Bhat on 21/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNCoffeeService.h"

@implementation RNCoffeeService

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getData:(NSString *)type  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  //get file name
  NSString *fileName = [[NSBundle mainBundle] pathForResource:type
                                                       ofType:@"json"
                                                  inDirectory:@"Fixtures"];
  //check file exists
  if (fileName) {
    //retrieve file content
    NSData *responseData = [[NSData alloc] initWithContentsOfFile:fileName];
    
    //convert JSON NSData to a usable NSDictionary
    NSError *error;
    NSDictionary *responseJsonData = [NSJSONSerialization JSONObjectWithData:responseData
                                                          options:0
                                                            error:&error];
    
    if (error) {
      reject(@"Error", @"Something went wrong!!", error);
    }
    else {
      resolve(responseJsonData);
    }
  }
  else {
    NSError* error = nil;
    reject(@"Error", @"Couldn't find file!", error);
  }
}
@end
