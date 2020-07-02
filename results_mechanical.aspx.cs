using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.DataVisualization.Charting;
using System.Web.Script.Serialization;
using System.Drawing;
using Newtonsoft.Json;
using System.IO;
using Newtonsoft.Json.Linq;

public partial class results : System.Web.UI.Page
{
    public string m_stime="";
    public string m_tablestr = "";
    public string jsonText = "";
    public string m_url = "";
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Request.Form["data"] == null)
        {
            return;
        }
       // TrashClass[] m_Trash=new TrashClass[16];
       // infoclass m_infoclass = new infoclass();
      
        //string jsonArrayText1 = "[{'type':'Trash','name':'复合废物','records':[]},{'type':'Trash','name':'纺织废物','records':[{'name':'报纸','hw':'0','fire':'0','weight':'1','Ltype':'8'}]},{'type':'Trash','name':'惰性物质','records':[]},{'type':'Trash','name':'纺织废物','records':[]},{'type':'Trash','name':'危险废物','records':[]},{'type':'Trash','name':'金属','records':[]},{'type':'Trash','name':'玻璃','records':[{'name':'包装纸','hw':'0','fire':'0','weight':'2','Ltype':'8'},{'name':'被单','hw':'0','fire':'0','weight':'3','Ltype':'2'}]},{'type':'Trash','name':'木材','records':[]},{'type':'Trash','name':'塑料','records':[]},{'type':'Trash','name':'其它','records':[]},{'type':'Trash','name':'颗粒物','records':[]},{'type':'Blank','records':[{'name':'mp3','hw':'0','fire':'0','weight':'1','Ltype':'1'}]},{'type':'Mark','records':[{'name':'time','counttime':5,'m_counttime':5}]}]";

        jsonText= Request.Form["data"];
       
        JArray m_arr = (JArray)JsonConvert.DeserializeObject(jsonText);
        JArray m_records= new JArray();
        string m_weight = "";
        string m_plugpart = "";
        string m_plugAlign = "5";
        string m_plugSpeed = "20";

        string m_Rollerpart = "";
        string m_RollerAlign = "6";
        string m_RollerSpeed = "20";

        string m_WindSpeed = "24";
        string m_Windpart = "20";
        for (int i = 0; i < m_arr.Count; i++)
        {
            JObject m_item = (JObject)m_arr[i];
             string type = m_item["type"].ToString();
             if (type == "Garbage")
            {
               
                 m_weight = m_item["weight"].ToString();
                 m_records = (JArray)m_item["GarbageArr"];
      
            }
             if (type == "plug")
             {


                 m_plugAlign = ( Convert.ToDouble(m_item["Align"].ToString())).ToString();//滚塞角度
                 m_plugSpeed = ( Convert.ToDouble(m_item["Speed"].ToString())).ToString();//滚塞转速
                 m_plugpart = m_item["part"].ToString();//滚塞分拣百分比
                
             }
             if (type == "Roller")
             {


                 m_RollerAlign = ( Convert.ToDouble(m_item["Align"].ToString())).ToString();//滚塞角度
                 m_RollerSpeed = ( Convert.ToDouble(m_item["Speed"].ToString())).ToString();//滚塞转速
                 m_Rollerpart = m_item["part"].ToString();//滚塞分拣百分比

             }
             if (type == "Wind")
             {


                // m_RollerAlign = (5 - Convert.ToDouble(m_item["Align"].ToString())).ToString();//滚塞角度
                 m_WindSpeed = ( Convert.ToDouble(m_item["Speed"].ToString())).ToString();//滚塞转速
                 m_Windpart = m_item["part"].ToString();//滚塞分拣百分比

             }
      //      if (type == "Mark")
      //      {
      //          m_infoclass.m_name = "Mark";
      //          m_infoclass.m_type = m_item["type"].ToString();
      //          JArray m_records = (JArray)m_item["records"];
      //          if (m_records.Count > 0)
      //          {
      //               for (int j = 0; j < m_records.Count; j++){
      //                   JObject m_MarkItem = (JObject)m_records[j];
      //                   m_infoclass.m_Testtime.m_name = m_MarkItem["name"].ToString();
      //                   m_infoclass.m_Testtime.m_stime =int.Parse( m_MarkItem["counttime"].ToString());
      //                   m_infoclass.m_Testtime.m_etime = int.Parse(m_MarkItem["m_counttime"].ToString());
      //                   m_infoclass.m_pici = m_MarkItem["m_pici"].ToString();
      //                   m_infoclass.m_studentId = m_MarkItem["m_studentId"].ToString(); 
      //               }
                     
      //          }
               
      //      }
        }

        
      ////  return;
      //  //   string m_str = Request.QueryString["res"];
      
      // //计算 总垃圾重量
      //  double m_Allweight = 0;
      //  for (int i = 0; i < m_Trash.Length; i++)
      //  {
      //      if (m_Trash[i] != null)
      //      {
                
      //          if (m_Trash[i].m_Waste != null)
      //          {

      //              for (int j = 0; j < m_Trash[i].m_Waste.Length; j++)
      //              {
      //                  m_Allweight += m_Trash[i].m_Waste[j].m_weight;
      //              }
      //          }

      //      }

      //  }

      //  //计算 垃圾桶垃圾重量 
        int m_codenum = 0;
       
        Series series = new Series("输入垃圾");//图标变量

        //设置图表类型
        series.ChartType = SeriesChartType.Pie;

        Series series1 = new Series("分拣垃圾");//图标变量
        series1.ChartType = SeriesChartType.Pie;
        for (int i = 0; i < m_records.Count; i++)
        {
            if (m_records[i] != null)
            {
                m_codenum++;
                // if (m_Trash[i].m_type == "Trash")
                {

                  
                    m_tablestr += "<tr><td>" + m_codenum + "</td>";
                    m_tablestr += "<td>" + m_records[i][0] + "</td>";
                    string m_partnum=(m_records[i][1].ToString());
                    m_tablestr += "<td>" + m_partnum + "%</td>";
                    var m_pointpart = (Convert.ToDouble(m_partnum) / 100) * Convert.ToDouble(m_weight) * Convert.ToDouble(m_plugpart);//滚塞分拣重量
                    m_pointpart *= Convert.ToDouble(m_Rollerpart);//滚桶分拣重量
                    m_pointpart *= Convert.ToDouble(m_Windpart);//风机分拣重量
                    m_tablestr += "<td>" + (Convert.ToDouble(m_partnum)/100) * Convert.ToDouble(m_weight) + "</td>";
                    m_tablestr += "<td>" + Math.Round(m_pointpart, 2) + "</td>";
                    series.Points.AddXY(m_codenum, (Convert.ToDouble(m_partnum) / 100) * Convert.ToDouble(m_weight));

                  //  series1.Points.AddXY(m_codenum + 0.3, Math.Round(m_pointpart, 2));
                  
                 
                }
            }


        }
        m_tablestr += "<tr><td>滚塞</td><td>角度</td><td>" + m_plugAlign + "</td><td>转速</td><td>" + m_plugSpeed + "</td></tr>";
        m_tablestr += "<tr><td>滚筒</td><td>平移</td><td>" + m_RollerAlign + "</td><td>转速</td><td>" + m_RollerSpeed + "</td></tr>";
        m_tablestr += "<tr><td>风机</td><td>速度</td><td>" + m_WindSpeed + "</td><td></td><td></td></tr>";
        
        //double m_RpAlignNum = Convert.ToDouble(m_plugAlign) - 5;
        //m_RpAlignNum = 86.67-(System.Math.Abs(m_RpAlignNum) / 3) * 0.005;

        //double m_RpSpeedNum =  Convert.ToDouble(m_plugSpeed) - 20;
        //m_RpSpeedNum = 86.67 - (System.Math.Abs(m_RpSpeedNum) / 10) * 0.005;
        //m_tablestr += "<tr><td></td><td>角度%</td><td>" + m_RpAlignNum + "</td><td>转速%</td><td>" + m_RpSpeedNum + "</td></tr>";
      //  m_tablestr += "<td>滚塞</td><td></td><td></td><td></td><td></td>";
      //  int result = m_infoclass.m_Testtime.m_stime;
       
      //  int stime = m_infoclass.m_Testtime.m_etime - result;
      //  int th = stime / 60;
      //  int tt = stime % 60;

      //  m_tablestr += "<tr><td>" + (m_codenum+1) + "</td>";
      //  m_tablestr += "<td>时间</td>";
      //  m_tablestr += "<td>" +th+":0"+ tt + "</td>";
      //  m_tablestr += "<td>得分</td>";
      //  m_tablestr += "<td>" + m_infoclass.m_Fraction+ "</td></tr>";
      // // m_url = "expScoreJson.aspx?studentId=" + m_infoclass.m_studentId + "&pici=" + m_infoclass.m_pici + "&expScore=" + m_infoclass.m_Fraction;
    
         

      //    //  Series series1 = new Series("垃圾总数");
            
          
      //      //按照升序的方式排列
      //   //   Chart1.Series[0].Sort(PointSortOrder.Ascending);
      //    //  Chart1.Series[1].Sort(PointSortOrder.Ascending);
        Chart1.Series.Add(series);
       // Chart1.Series.Add(series1);
            //Chart1.Series.Add(series1);
          

    }


    
    protected void Chart1_Click(object sender, ImageMapEventArgs e)
    {
        string str = e.PostBackValue;
    }
 

}