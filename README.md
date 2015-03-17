《拍岸集》
======================
人生如棋 落子无悔（代序）
----------------------
<br>
我喜欢诗词，喜欢诗意的语言中所传达出的人生状态和体悟。当要给自己取个花名的时候，我首先想到的就是诗词。我想给自己取一个如繁星、春水那般“诗意”的名字。最终，我选定苏东坡《念奴娇·赤壁怀古》中“惊涛拍岸卷起千堆雪”一句的“拍岸”两字作为花名，通过惊涛拍岸虽百折而仍不思回的自然景观以及谈笑间樯橹灰飞烟灭的历史画卷，传达我对大气磅礴、热情奔放、智慧洒脱之人生状态的向往。因此，我的技术博客文集，也就取名为*《拍岸集》*。名字虽然响亮，但其内容却未必能与之相称，因而我也倍感惶恐。不过，我又劝自己，既然只是记录屌丝追寻历程中点点滴滴的博文，则自己喜欢便好。各位看官如若看不惯，且当在下是年少轻狂的“怪蜀黍”可好？
<br>

程序语言与诗词语言是截然不同的。前者是严谨的，后者则要随性得多。因此，一个喜欢诗词的人要去写程序，必须经过一个痛苦的过程。这就好像练葵花宝典——“欲练此功，必先自宫”。但即便自宫，也未必能够成功。是的，入行成为一个程序员是有代价的。

<br>
回想起，十多年前开始接触程序，到现在以程序开发为职业，这中间实在是一个漫长的过程。在这个过程中，我花费了许多美好的日子埋头在幽暗的屋子里与电脑对话，包括无数个诱人的周末和夜晚。选择了成为一名程序员，不管是做前端开发还是后端开发，都意味着你需要能忍受经常不得不终止与家人的闲聊，关掉正在热播的影视节目，拒绝窗外春暖花开、夏荷带雨、秋叶飘零、冬雪纷飞的诱惑，静下心来，把精力集中到API文档的阅读、概念的理解、逻辑的梳理、架构的搭建、代码的编写等枯燥的事情中去。久而久之，当你忽然某一天偶得空闲，重新回到灿烂的阳光下时，习惯了长期呆在室内的你会发现，自己对日光是那样的不适应，以致于眉头紧锁，眉心有日积月累的深深皱纹，甚至此时你还有些头晕。那就对了。这就是把青春付与程序的代价！

<br>
当然，与失去相伴而来的，是获得。你从啃老一族慢慢变得可以自给自足，从浮躁轻率变得理智严谨，从浮想联翩变得脚踏实地。你可能从小白走向了leader岗位，从光棍一条变得拖家带口，甚至可以骄傲地和偶遇的陌生人说：你用的这个软件是我们公司开发的，我在其中担任某某角色！

<br>
每一个收获，都如同辛劳一天后回家吃到的一块小甜点，未必能让你一天的辛劳烟消云散。你可能会说：看起来收获并不那么多，代价却很高啊！我所能告诉你的是，收获每个人都不一样，难以一一尽述，而代价却大体相同，那就是牺牲诸多美好时光。可是，你要知道，每个人都需要作出选择，任何事情都是有代价的，而每个人选择的能力也千差万别，所以选择的对与错也便难有统一的标准。人非圣贤，谁能总是做出正确的选择？你唯一需要考虑的，是在你力所能及的范围内权衡代价与获得，看这样的付出对你来说是否值得，是否愿意。不愿意的话便要及时调整方向，勿要在犹犹豫豫中痛苦度日。一旦选好了就认真走下去，像惊涛拍击岸崖一般，纵然被击成细碎的浪花干涸在岸崖上，亦应无悔。至于最后能否成功，有句歌词唱得好，“三分天注定，七分靠打拼，爱拼才会赢”。机遇难以揣摩，打拼自己可控。多一份努力，便多一线成功的希望。打拼过后，即便失败了，也留一个畅快淋漓的人生过程！而这，也是对生命力的最好诠释。如果生命像一滩死水，活着还有什么劲儿？

<br>
##目录

###第一篇 技术篇

1. [Git的使用简介](#git 'Git的使用简介')

2. [MarkDown语法简介](#markdown 'MarkDown语法简介')

3. [CSS之重置样式](#css-reset 'CSS之重置样式')

4. [CSS之常见兼容性问题总结](#css-compatibility 'CSS之常见兼容性问题总结')

5. [CSS之高级布局](#css-layout 'CSS之高级布局')

6. [CSS3之动画实现](#css-animation 'CSS3之动画实现')

7. [JavaScript之基础知识理解](#js-base 'JavaScript之基础知识理解')

8. [JavaScript之常用JavaScript代码段](#js-segment 'JavaScript之常用JavaScript代码段')

9. [JavaScript之自动化工作流](#js-workflow 'JavaScript之自动化工作流')

10. [JavaScript之AngularJS](#js-angular 'JavaScript之AngularJS')

11. [JavaScript之Jade模版](#js-jade 'JavaScript之Jade模版')

12. [JavaScript之node.js](#js-node 'JavaScript之node.js')

13. [前端性能优化技巧总结](#optimization '前端性能优化技巧总结')
<br>

<a name='git'></a>
#### Git的使用简介

##### Windows系统中Git的使用

在控制台中输入
d:
mkdir paiangit
git clone https://github.com/paiangit/main.git
出现错误提示如下：

>'git' 不是内部或外部命令，也不是可运行的程序或批处理文件。

这时我们首先得检查是否安装了git，如果没有，则得先去 http://git-scm.com/download/win 中下载windows版的git并安装它。我这里选择安装在D:\Program Files目录下。

其次，需要查看一下系统中的环境变量是否对git的路径进行过添加。具体的添加做法是，在“我的电脑”图标上单击右键——选择“属性”——选中“高级”选项卡——单击其中的“环境变量”按钮——在下侧的系统变量中找到Path变量，双击它——把下列路径添加到该变量的最后。

;D:\Program Files\Git\bin;D:\Program Files\Git\libexec\git-core;

其中的D:\Program Files\改成你的Git安装路径即可。

然后重启控制台（注意，改完环境变量后要重启控制台才会生效），在控制台中输入
d:
cd paiangit
切换回d:/paiangit目录，重新试一下 git clone https://github.com/paiangit/main.git
这下就可以成功clone项目到本地了。

然后用 git checkout daily/1.0.0 切换到我在github上已经创建好的分支daily/1.0.0上。

接下来用webstorm打开d:/paiangit目录，对其中的内容进行编辑。比如，我们可以打开README.md文件，用MarkDown语法编辑其中的内容。MarkDown语法怎么用，我在下一节的内容中会讲到。

在对README.md文件编辑完成后，用git status命令查看一下状态，会在控制台中出现哪些文件进行过更新的信息。

下面就需要用命令对更新过的文件进行提交了。

git add README.md                                #添加对README.md的监控

git commit -m '增加了git在windows中的使用'       #提交到本地
这时会弹出如下信息：
*** please tell me who you are
这时候，你需要提供你的用户名和邮箱，以便其确认你的身份。命令如下：
git config user.name 你的github用户名
git config user.email 你的github邮箱

最后再push到远程上：
git push origin daily/1.0.0                      #push到远程

输入完这上一行命令后，会提示你输入用户名和密码，按要求输入即可。密码在输入时什么提示也没有，你可能感觉没有输入成功。这时你不用担心，只要认真输入完成，回车即可。如果输入是正确的，就可以完成push到远程的操作了。

但是，多提交几次你就会发现，每次都要你输入用户名和密码，是不是很麻烦啊？下面告诉你一个简单的方法，用SSH公钥来进行认证。
打开控制台，在默认的目录下（一般是C:\Documents and Settings\Administrator\）输入dir命令，查看该目录下有哪些文件夹和文件。在其中找一找有没有.ssh这个文件夹。如果没有，则切换到C:\Documents and Settings\Administrator\或者D:\Documents and Settings\Administrator\中找一找有没有该文件夹。找到该文件夹后，用cd .ssh切换到该文件夹下。
然后输入如下命令进行公钥和秘钥的生成。
ssh-keygen -C 你的email地址  -t rsa
然后会提示你输入保存秘钥的地址，你直接输入id_rsa即可将公钥保存到.ssh目录下的id_rsa.pub文件中，而秘钥则在相同目录下的id_rsa中。

然后用cat id_rsa.pub命令将该公钥文件的内容打印到控制台中，复制其中不包含email地址的部分。
在github网站上登录进去，单击右上角的小齿轮进入到settings菜单，选中左侧的SSH Keys菜单项，单击右上方Add SSH Key按钮，把刚才复制好的SSH公钥粘贴进去。
title可以随便取。

然后重启一下控制台。这样，下次进行push时就不用再输入用户名密码了。


##### Mac系统中Git的使用

常用命令及其意义如下：

mkdir paiangit                   #创建一个目录paiangit

git init                         #初始化一个项目

git config user.name paiangit    #设置访问该目录的账户名

git config user.email xxx@xx.xx  #设置访问该目录的账户邮箱

pwd                              #显示当前目录的完整路径

rm -rf xxx                       #删除某某文件或文件夹

mkdir paiangit                 #创建目录 paiangit

ls                               #查看当前目录下文件

cd paiangit                    #切换到目录paiangit

cd ..                            #返回到当前目录的上一级目录

clear                            #清屏

git status                       #查看有变化的文件(一般有变化的文件会以红色显示出来)

git clone https://github.com/paiangit/main.git   #拷贝一个项目到本地

git checkout -b daily/1.x.x      #在现在分支上创建一个新分支

git checkout daily/1.x.x         #切换到这个分支

git add -A                       #stages all

git commit -m '提交的备注信息'     #先add 再提交修改

git push origin daily/1.x.x      #把内容推送到日常环境

git tag publish/1.x.x            #打个tag

git push origin publish/1.x.x    #把这个tag的版本发布到正式线上

git pull origin daily/1.x.x      #拉取最新代码

git rm --cached -r right.css.map  #移除文件right.css.map的缓存

git diff                          #查看修改的详细内容

git diff  cached

<a name='markdown'></a>
#### MarkDown语法简介

<a name='css-reset'></a>
#### CSS之重置样式

<a name='css-compatibility'></a>
#### CSS之常见兼容性问题总结

<a name='css-layout'></a>
#### CSS之高级布局

<a name='css-animation'></a>
#### CSS3之动画实现

<a name='js-base'></a>
#### JavaScript之基础知识理解

<a name='js-segment'></a>
#### JavaScript之常用JavaScript代码段

<a name='js-workflow'></a>
#### JavaScript之自动化工作流

<a name='js-angular'></a>
#### JavaScript之AngularJS

<a name='js-jade'></a>
#### JavaScript之Jade模版

<a name='js-node'></a>
#### JavaScript之node.js

<a name='optimization'></a>
#### 前端性能优化技巧总结

###第二篇 体悟篇
（待续）