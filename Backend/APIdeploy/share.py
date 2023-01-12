import json
import boto3
import os

# get dynamodb table name from environment variable
DYNAMODB_TABLE = os.environ['DYNAMODB_TABLE']

def handler(event, context):
    # print(json.dumps(event))
    
    if (event['queryStringParameters'] == None):
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            "body": json.dumps(event)
        }
    else:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(DYNAMODB_TABLE) # replace 'my_table' with the name of your DynamoDB table
        user_id = event['queryStringParameters']['userId']
        image_url = event['queryStringParameters']['imageUrl']
        table.put_item(Item={'userId': user_id, 'imageUrl': image_url})
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            "body": json.dumps({'userId': user_id, 'imageUrl': image_url})
        }
