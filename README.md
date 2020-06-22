# Mapping
Method | URL | 기능
------ | ------ | ------
get | / | Index Page
post | /upload | 업로드


# AWS (14주차)

## AWS
 - Amazone Web Service

## AWS 필요한 설정
 - EC2
  * 가상머신 설정
  * Ubuntu 18.04 LTS (프리티어) 사용
  * 인바운드 규칙 : 본인이 사용할 PORT 오픈

 - S3
  * 버킷(bucket) 생성
  * Public으로 설정

 - RDS
  * DB : mariaDB 사용

 - IAM
  * 계정 생성
  * AmazonS3FullAccess, AmazonEC2ReadOnlyAccess 권한 추가
  * aws_config.json 에서 accessKeyId, secretAccessKey에 쓰이는 값이 IAM의 계정 값.
  


## FileZilla 접근
 - SFTP로 접근
 - 호스트 : ec값
 - 로그온 유형 : 키파일



## git clone
 - git clone 'git주소'
 