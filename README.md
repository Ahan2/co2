# co2
Algorithm to calculate the amount of CO2 exhaled by humans in 1 second.

#How it works
The program first calculates the world population after 1 second (i.e. the population of humans in 1 second after the current time(t)).

NOTE: The world population in the program currently always begins from a defined value (7380201256), since it is not updating, but this would be easy enough to do. &#128539;

#The agorithm to calculate the population
Where:
N0 (initial population) = The population at time t = 0.

N (future population) = The population at time t.

r (rate) = The rate of population change as a function of t (a 1% increase is expressed as 0.01).

t (time) = The amount of time required to produce a growth in population proportional to N/N0.

![N=N0e(rt)](http://ahansabharwal.com/co2algorithm.png)

SOURCE(S):

http://arachnoid.com/lutusp/populati.html

http://answers.google.com/answers/threadview?id=86080
