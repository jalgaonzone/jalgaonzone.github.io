# जळगाव जिल्ह्यातील हवामान आणि पावसाची माहिती

**दिनांक:** 24 सप्टेंबर 2026

जळगाव जिल्ह्यात मान्सूनच्या परतीच्या काळात पुन्हा पावसाचे वातावरण निर्माण झाले आहे. हवामान विभागाने 24 आणि 25 सप्टेंबर रोजी जळगाव जिल्ह्यासाठी यलो अलर्ट जारी केल्याची माहिती स्थानिक वृत्तमाध्यमांनी दिली आहे.

## जळगावमधील हवामान

TOPIC 1: PROBLEMS BASED ON PROBABILITY-I

Q1) A fair coin is tossed 6 times. Find the probability of getting exactly 4 heads.

R CODE:
dbinom(4, size=6, prob=0.5)

OUTPUT:
[1] 0.234375


Q2) A fair coin is tossed 6 times. Find the probability of getting at least 3 heads.

R CODE:
p=sum(dbinom(3:6, size=6, prob=0.5))
p

OUTPUT:
[1] 0.65625


Q3) A dice is rolled 4 times. Find the probability of getting exactly 2 sixes.

R CODE:
z=dbinom(2, size=4, prob=1/6)
z

OUTPUT:
[1] 0.1157407


Q4) A dice is rolled 4 times. Find the probability of getting at most 1 six.

R CODE:
x=sum(dbinom(0:1, size=4, prob=1/6))
x

OUTPUT:
[1] 0.8680556


--------------------------------------------------

TOPIC 3: MODEL SAMPLING OF BINOMIAL DISTRIBUTION

Q1) Generate a random sample of size N=30 from a binomial distribution with parameter n=5 and p=0.4.

R CODE:
N=30
n=5
p=0.4
rbinom(N, size=n, prob=p)

OUTPUT:
[1] 3 3 2 3 2 0 3 2 0 1 0 2 1 2 1 2 0 2 2 3 2 2 1 2 3 1 3 1 2 1


Q2) A factory produces light bulbs each with a 10% probability of being defective. 8 bulbs are tested in each batch. Generate a random sample of 50 batches from B(8,0.1).

R CODE:
N=50
n=8
p=0.1
rbinom(N, size=n, prob=p)

OUTPUT:
[1] 0 1 0 1 1 0 0 1 1 0 0 0 1 2 1 1 0 1 0 0 0 3 0 1 1 1 1 2 0 0 1 1 0 0 0 0 0 1 1 2 0 0 1 1 0 0 0 0 1 2


Q3) The probability that a student passes an exam is 0.7. If 15 students are selected for each group, generate a random sample of 25 groups.

R CODE:
N=25
n=15
p=0.7
rbinom(25, size=15, prob=0.7)

OUTPUT:
[1] 9 10 12 8 8 12 12 9 9 9 12 11 11 9 9 10 8 11 11 14 10 11 12 11 10


Q4) A basketball player has a 75% probability of making a free throw. The player takes 10 shots in each session. Generate a random sample of 40 sessions.

R CODE:
N=40
n=10
p=0.75
rbinom(N, size=10, p=0.75)

OUTPUT:
[1] 9 6 8 8 8 6 8 8 9 7 9 5 8 8 7 8 9 6 4 7 7 6 10 6 7 8 8 8 5 8 6 7 6 10 7 8 8 6


Q5) The probability that a customer responds to an email is 0.4. If 10 customers are contacted in each campaign, generate a random sample of 35 campaigns.

R CODE:
N=35
n=10
p=0.4
rbinom(N, size=10, prob=p)

OUTPUT:
[1] 3 5 4 7 5 4 4 3 5 4 5 4 4 4 5 3 3 2 3 4 6 2 6 3 5 2 3 2 4 7 1 4 6 2 2


--------------------------------------------------

TOPIC 5: MODEL SAMPLING FROM NORMAL DISTRIBUTION

Q1) Draw a random sample of size 8 from N(5,4) distribution. Calculate the mean and standard deviation of the sample so drawn.

R CODE:
x=rnorm(8,5,2)
x

mean=mean(x)
mean

sd=sd(x)
sd

OUTPUT:
[1] 4.575872 6.665142 2.175048 4.400175 3.301878 4.205939 2.564800 8.375179

[1] 4.161158

[1] 1.906549


Q2) Draw a random sample of size 10 from N(56,16) distribution. Calculate the sample mean and sample median.

R CODE:
x1=rnorm(10,56,4)
x1

mean=mean(x1)
mean

med=median(x1)
med

OUTPUT:
[1] 55.93599 60.29978 45.59320 54.18721 53.29807 51.10830 62.18644 50.33887 57.27356 59.38575

[1] 54.96072

[1] 55.0616


Q3) Draw a random sample of size 6 from N(5,22). Calculate mean and standard deviation of sample so drawn.

R CODE:
x3=rnorm(6,5,sqrt(22))
x3

mean=mean(x3)
mean

sd=sd(x3)
sd

OUTPUT:
[1] 5.83578607 0.89468791 9.41445893 5.80012903 0.01175266 -1.51052713

[1] 3.407715

[1] 4.23644


Q4) Draw a random sample of size 8 from a normal distribution with mean 3.5 and variance 5. Calculate the median.

R CODE:
x4=rnorm(8,3.5,sqrt(5))
x4

med=median(x4)
med

OUTPUT:
[1] 8.1660420 1.9828208 -0.6491844 4.6924042 4.1936959 0.4727344 -0.8445826 3.2399397

[1] 2.61138


--------------------------------------------------

TOPIC 8: MULTIPLE LINEAR REGRESSION

Q1) Suppose you wish to predict the income of university cafeterias on the basis of floor space and number of employees. A sample of 5 cafeterias gives the following data. Find the multiple regression equation of Y on X1 and X2.

R CODE:
y=c(20000,15000,10000,5000,10000)
x1=c(10,5,10,3,2)
x2=c(15,8,12,7,10)

d=data.frame(y,x1,x2)
d

plot(d)

cor(d)

fit=lm(y~x1+x2)
fit

summary(fit)

OUTPUT:

  y    x1 x2
1 20000 10 15
2 15000 5 8
3 10000 10 12
4 5000  3 7
5 10000  2 10

          y        x1        x2
y  1.0000000 0.5758168 0.6968670
x1 0.5758168 1.0000000 0.7978146
x2 0.6968670 0.7978146 1.0000000

Call:
lm(formula = y ~ x1 + x2)

Coefficients:
(Intercept)          x1          x2
   -559.52        81.74     1160.49

Call:
lm(formula = y ~ x1 + x2)

Residuals:
     1      2      3      4      5
 2335   5867  -4184  -2809  -1209

Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept)  -559.52  10846.83  -0.052    0.964
x1             81.74   1257.99   0.065    0.954
x2           1160.49   1492.60   0.777    0.518

Residual standard error: 5776 on 2 degrees of freedom
Multiple R-squared: 0.4867
Adjusted R-squared: -0.02659

F-statistic: 0.9482 on 2 and 2 DF
p-value: 0.5133


Q2) The yield of a chemical process is related to the concentration of reactant and the operating temperature. Fit a multiple linear regression equation y on X1 and X2. Estimate the yield when concentration is 1.5 and operating temperature is 165.

R CODE:
x1=c(81,89,83,91,79,87,84,90)
x2=c(1,1,2,2,1,1,2,2)
x3=c(150,180,150,180,150,180,150,180)

d=data.frame(x1,x2,x3)
d

cor(d)

OUTPUT:

          x1        x2        x3
x1 1.0000000 0.3638034 0.9095086
x2 0.3638034 1.0000000 0.0000000
x3 0.9095086 0.0000000 1.0000000

## नागरिकांनी खबरदारी घ्यावी

पावसाच्या काळात नागरिकांनी आवश्यक खबरदारी घ्यावी. शेतकऱ्यांनी पिकांची स्थिती लक्षात घेऊन स्थानिक कृषी विभागाच्या सूचनांचे पालन करावे.

वीजांच्या कडकडाटासह पाऊस असल्यास मोकळ्या मैदानात किंवा झाडाखाली थांबणे टाळावे.

## जळगाव हवामान अपडेट्स

जळगाव जिल्ह्यातील आजचे हवामान, पावसाचा अंदाज आणि हवामान विभागाच्या अलर्टसाठी Jalgaon Zone वरील अपडेट्स पाहत रहा.

**टीप:** हवामानाची माहिती वेळेनुसार बदलू शकते. महत्त्वाच्या निर्णयांसाठी अधिकृत हवामान विभागाच्या ताज्या सूचनांचा आधार घ्या.
