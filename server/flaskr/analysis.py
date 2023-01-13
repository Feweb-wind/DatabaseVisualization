# 分析比例 对一维数组中的元素分析
def analysisProportion(arr):
    result = {}  # 字典
    for item in arr:
        # 如果键存在，数值＋1，如果不存在，添加，赋值1
        if (item in result):
            result[item] += 1
        else:
            result[item] = 1
    return result


# 字典排序按照值排序


def sortDict(mydict):
    mydict = sorted(mydict.items(), key=lambda x: x[1])
    mydict = dict(mydict)
    return mydict

# 分析岗位分布


def analysisP(arr, query):
    result = {}
    i = 0
    for item in query:
        query[i] = item.upper()
        i += 1
    for item in arr:
        temp_key = ""
        item[0]
        for i in query:
            if (item[0].find(i) != -1):
                # 如果键存在，数值＋1，如果不存在，添加，赋值1
                if (i in result):
                    result[i] += 1
                else:
                    result[i] = 1
    temp = []
    for key, val in result.items():
        temp.append((key, val))
        temp = sorted(temp, key=lambda x: x[1], reverse=True)
    return temp


def analysisJobProportion(arr):
    query = ['前端', 'Java', 'C++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'VB', 'Ruby', 'Node.js', 'Golang'
             '图像', '全栈工程师', '后端开发', 'Android', 'ios', 'JavaScript', 'U3D', 'UE4', '测试工程师', '运维工程师',
             '系统管理员', '网络安全', 'DBA']
    return analysisP(arr, query)
# 分析地理分布


def analysisAccessProportion(arr):
    query = ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区",
             "洪山区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "东西湖区", "汉南区"]
    return analysisP(arr, query)

# 分析本科与研究生薪资增长情况


def analysisSalary(arr):
    # 本科
    result1 = {
        '在校/应届': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '10': 0

    }
    # 硕士
    result2 = {
        '在校/应届': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '10': 0

    }
    for item in arr:
        low = 0
        heigh = 0
        result = {}
        if (item[1] == '本科'):
            result = result1
        elif (item[1] == '硕士'):
            result = result2
        else:
            continue
        if (item[0] == '在校/应届'):
            result[item[0]] = (item[2]+item[3])//2
        elif (item[0] == '1-3年'):
            result['1'] = (result['1']+item[2])//2
            result['2'] = (result['2']+item[3])//2
        elif (item[0] == '3-5年'):
            result['3'] = (result['3']+item[2])//2
            result['4'] = (result['4']+item[3])//2
        elif (item[0] == '5-10年'):
            result['5'] = (result['5']+item[2])//2
            result['10'] = (result['10']+item[3])//2
    return [result1, result2]
