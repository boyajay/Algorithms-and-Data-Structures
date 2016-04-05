##PYTHON 

 def characterFrequency(str):
 	dict = {}
 	for i in range(len(str)):
 		if (dict[str[i]]):
 			dict[str[i]] += 1
 		else:
 			dict[str[i]] = 1
 	result = []
 	for key in dict:
 		result.append(dict[key])
 	freqSort = False;
 	while (!freqSort):
	 	freqSort = True
	 	for j in range(1:len(result)):
	 		if result[j][1] < result[j-1][1]:
	 			temp = result[j]
	 			result[j] = result[j-1]
	 			result[j-1] = temp
	 			freqSort = False
	 alphaSort = False
	while (!alphaSort):
	 	alphaSort= True
	 	for j in range(1:len(result)):
	 		if result[j][1] == result[j-1][1] and ord(result[j][1]) < ord(result[j-1][1]):
	 			temp = result[j]
	 			result[j] = result[j-1]
	 			result[j-1] = temp
	 			alphaSort= False
	 return result

	 #use sorted module from operator /itemgetter





