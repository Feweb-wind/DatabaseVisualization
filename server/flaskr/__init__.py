# __init__.py 有两个作用：一是包含应用工厂；二 是告诉 Python flaskr 文件夹应当视作为一个包。
import os
import threading
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from . import db
from . import analysis
# 创建游标
con = db.getCursor("localhost", "root", "cf200136", "job_info")
# cur = con.cursor()
lock = threading.Lock()


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
    # 解决跨域问题
    CORS(app, resources=r'/*', origins=r'/*')
    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    # a simple page that says hello

    @app.route('/')
    def hello():
        res = {
            "data": db.getHrMessage(con.cursor())
        }
        return "hello world"

    @app.route('/api/getJob')
    def getJob():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getJobMessage(con.cursor())
        }
        lock.release()
        return res
    # 获得学历比例

    @app.route('/api/getDegree')
    def getDegree():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getDegree(con.cursor())
        }
        lock.release()
        print(res["data"])
        return analysis.analysisProportion(res["data"])

    # 获得融资情况
    @app.route('/api/getFinancing')
    def getFinancing():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getFinancing(con.cursor())
        }
        lock.release()
        print(res["data"])
        return analysis.analysisProportion(res["data"])
    # 获得公司类别

    @app.route('/api/getField')
    def getField():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getField(con.cursor())
        }
        lock.release()
        print(res["data"])
        return analysis.analysisProportion(res["data"])
    # 获得公司岗位数量

    @app.route('/api/getComJobNum')
    def getComJobNum():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getCompanyJobNum(con.cursor())
        }
        res["data"] = sorted(res["data"], key=lambda x: x[1], reverse=True)
        res["data"] = res["data"][:10]
        lock.release()
        return res
    # 获得岗位分布

    @app.route('/api/analysisJob')
    def analysisJob():
        lock.acquire()
        con.ping(reconnect=True)
        allJob = db.getJob(con.cursor())
        analJob = analysis.analysisJobProportion(allJob)
        res = {
            "data": analJob
        }
        lock.release()
        return res
    # 获得公司数量

    @app.route('/api/getComNum')
    def getComNum():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getCompanyNum(con.cursor())
        }
        lock.release()
        return res
    # 获得岗位数量

    @app.route('/api/getJobNum')
    def getJobNum():
        lock.acquire()
        con.ping(reconnect=True)
        res = {
            "data": db.getJobNum(con.cursor())
        }
        lock.release()
        return res

    #     return res
    # 获得地理测试
    @app.route('/api/getComAddress')
    def getComAddress():
        lock.acquire()
        con.ping(reconnect=True)
        allAddress = db.getComAddress(con.cursor())
        res = {
            "data": analysis.analysisAccessProportion(allAddress)
        }
        lock.release()
        return res

    @app.route('/api/getSalary')
    def getTest():
        lock.acquire()
        con.ping(reconnect=True)
        temp = db.getTimeAndEdu(con.cursor())
        res = {
            "data": analysis.analysisSalary(temp)
        }
        lock.release()
        return res
    return app
