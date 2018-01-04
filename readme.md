# Trophy Case Secrets Properties

## Background
A website for a banded named 'Trophy Case Secrets' out of Winter Haven. Fl. Circa late 2001.

## Features

## Goal
Code base refresh. 

## Requirements
 - Docker
 - Command prompt of some sort
 
## Road map
None; this project repository is for historic reference only.

## Usage
Clone the repository locally:
```
cd /project/root/parent
git clone https://github.com/davidjeddy/trophy-case-secrets.git
cd ./tcs
```

Then build and start the image via:

```
docker build -t tcs . --rm
docker run -d -h localhost -p 80:80 --name trophy_case_secrets_web -v "$PWD":/var/www/html tcs:latest --rm
docker logs -f trophy_case_secrets_web
```

Finally, if all went well, you should be able to visit `localhost` in your client browser of choice and see the 
application running.


## Warning
This project inception was pre-framework or best practice abeyance. If anything this is an example of hobbiest level web
development in the mid 2000s.

Though recently wrapped in a docker container for portability and hosted in a GiT repo; neither of which existed when
the site was made, this site IS NOT:
 - Secure
 - Pragmatic
 - Best practice adhering
 - An example of any sort of decent practices; if anything this is what you should NOT be doing


## Original Readme
Site Name:
trophy Case Secrets
Site Description:
TCS badn site
Site Location:
geocities.com/tcs
Site Host:
geocities.com
Site name/pw:
#######/#######
Dates:
	Started:
		7/2K1
	Finished:
		8/2k1
	Uploaded:
		8/2k1
