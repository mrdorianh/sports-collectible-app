import json
import os

def handler(event, context):
    print(json.dumps(event))
    # Get the name of the S3 bucket from the environment variables
    bucket_name = os.environ['BUCKET_NAME']
    print(f'React app successfully deployed to S3 bucket: {bucket_name}')
