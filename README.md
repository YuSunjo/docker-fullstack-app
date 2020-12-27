#### 자세한건 위의 7~9강 참조
![image](https://user-images.githubusercontent.com/67853463/103171115-f6e8b800-488c-11eb-92a4-e9a5ec4976d5.png)

```
travis ci sync 
```
```
AWS RDS 생성     -- docker-compose.yml파일에 environment에 맞게 설정해주기 
```
```
vpc 검색 
보안 그룹 -> 생성 -> 인바운드 규칙 추가 (3306,  내가 생성한 보안 그룹)
```
```
RDS -> 수정 -> 보안그룹 (내가 생성한 보안 그룹 추가 ) 
EB(elasticbeanstalk) -> 구성 -> 인스턴스 -> 보안그룹(내가 생성한 보안그룹 추가)
EB(elasticbeanstalk) -> 구성 -> 소프트웨어 -> MYSQL_HOST, MYSQL_POST 등을 추가해주기 (위에 RDS서버에 맞게 ) 
```
```
.travis.yml 파일에서 delpoy부분을 자신의 elasticbeanstalk에 맞는 설정하기 
```
![image](https://user-images.githubusercontent.com/67853463/103171428-868f6600-488f-11eb-8676-7460ee2fea80.png)
![image](https://user-images.githubusercontent.com/67853463/103171444-aaeb4280-488f-11eb-8834-1b57eb2fd6e4.png)
![image](https://user-images.githubusercontent.com/67853463/103171450-b9d1f500-488f-11eb-86bf-2c8095db2e0b.png)
![image](https://user-images.githubusercontent.com/67853463/103171465-d2daa600-488f-11eb-9e93-c472487158b9.png)
![image](https://user-images.githubusercontent.com/67853463/103171473-e5ed7600-488f-11eb-9e00-8aa687d3d867.png)
```
자신의 dockerHub아이디 비밀번호도 추가
```
