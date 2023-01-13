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


def analysisJobProportion(arr):
    result = {}
    query = ['前端', 'Java', 'C++', 'PHP', 'C', 'C#', '.NET', 'Hadoop', 'Python', 'VB', 'Ruby', 'Node.js', 'Golang'
             '图像', '全栈工程师', '后端开发', 'Android', 'ios', 'JavaScript', 'U3D', 'UE4', '测试工程师', '运维工程师',
             '系统管理员', '网络安全', 'DBA']
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
