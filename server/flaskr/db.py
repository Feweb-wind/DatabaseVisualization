import pymysql


def getCursor(host, user, password, database):
    con = pymysql.connect(host=host, user=user,
                          password=password, database=database)
    return con


def getAllMessageOfTable(cursor, tableName, column='*'):
    sql = "select " + column.lower() + " from " + tableName + ';'
    print(sql)
    cursor.execute(sql)
    res = cursor.fetchall()
    return res


def getJobMessage(cursor):
    return getAllMessageOfTable(cursor, 'jobinformation')


def getCompanyMessage(cursor):
    return getAllMessageOfTable(cursor, "companyinformation")


def getHrMessage(cursor):
    return getAllMessageOfTable(cursor, "hrinformation")


def getCompanyNum(cursor):
    sql = "select count(companyNo) from companyinformation;"
    cursor.execute(sql)
    res = cursor.fetchall()
    return res[0]


def getJobNum(cursor):
    sql = "select count(*) from jobinformation;"
    cursor.execute(sql)
    res = cursor.fetchall()
    return res[0]
# 单独获得学历信息


def getDegree(cursor):
    res = getAllMessageOfTable(cursor, "jobinformation", "jobEducation")
    result = []
    # 数组降维
    for item in res:
        result.append(item[0])
    return result

# 获得融资情况


def getFinancing(cursor):
    res = getAllMessageOfTable(
        cursor, "companyinformation", "companyFinancing")
    result = []
    # 数组降维
    for item in res:
        if (len(item[0]) > 1):
            result.append(item[0])
    return result

# 获得公司类别


def getField(cursor):
    res = getAllMessageOfTable(
        cursor, "companyinformation", "companyField")
    result = []
    # 数组降维
    for item in res:
        result.append(item[0])
    return result
# 单独获得工作


def getJob(cursor):
    res = getAllMessageOfTable(cursor, "jobinformation", "jobName")
    return res
# 获得公司位置


def getComAddress(cursor):
    res = getAllMessageOfTable(cursor, "companyinformation", "companyAddress")
    return res


def getTimeAndEdu(cursor):
    res = getAllMessageOfTable(
        cursor, "jobinformation", "jobworkTime,jobEducation,joblowSalary,jobhighSalary")
    return res
#
# 编写sql语句查询，适用于复杂情况


def getMessageBySql(cursor, sql):
    sql = sql.lower()
    cursor.execute(sql)
    res = cursor.fetchall()
    return res


def getCompanyJobNum(cursor):
    sql = """
    select companyName,count(jobNo) from companyinformation com,companytojobandhr con
    where com.companyNo = con.companyNo
    group by com.companyNo;
    """
    return getMessageBySql(cursor, sql)
