AWK command:
     AWK is a sccripting language used for manipulating data and generating reports.The awk command programming language requires no compiling and allows the user to user to use variables, numeric functions,string functions and logical operators.
     Awk is mostly used for patterns scanning and processing.It searches one or more files to see if they contain lines that matches with the specified patterns and then perform the associated actions.
1)AWK OPEARTIONS:
  a)scans a file line by line
  b)splits each input line into fields
  c)compares input line/fields to pattern
  d)performs actions on matched lines

2)USED FOR:
   a)Transform data files
   b)produce formatted reports


syntax: awk '{action}' file_name
    ==>awk " /searchword/ {action}' filename
    ==>awk "{print $1,$4}' filename : if a line has 4 words it will stored in $1,$2,$3,$4 when you try to run this command it will print $1 and $4 stored words

Built-in variables in Awk:
-------------------------
      Awk's built-in variables include the field variables -$1, $2,$3 and soon 
      -->$0 is the entire line
      that break a line of text into individual words or pieces called fields


      -->NR - NR command keeps a current count of the number of input records
      -->NF - NF command keeps a count the number of fields within the current input record
      -->RS - RS command stores the current record seperator charactor.
      -->OFS - OFS command stores the output field seperator
      -->ORS - ORS command stores the output recordScreenshot (34).png seperator