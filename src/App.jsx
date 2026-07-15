import React from 'react'
import './index.css'

function App() {
  return (
    <div className="app">
      {/* 顶部导航栏 */}
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">AI-company-hub</h1>
          <nav className="nav-links">
            <a href="#overview">项目总览</a>
            <a href="#production">内容生产</a>
            <a href="#automation">流程自动化</a>
            <a href="#team">AI员工分工</a>
          </nav>
        </div>
      </header>

      {/* 主体内容区 */}
      <main className="main-content">
        <section id="overview" className="section">
          <h2>项目总目标</h2>
          <p>打造全链路AI自动化运营平台，统一管理所有项目、代码、发布、服务两大核心业务：</p>
          <ul className="goal-list">
            <li>多行业内容生产+全平台自动发布：适配马来西亚本地餐饮、房产、零售、服务等行业</li>
            <li>商家办公流程自动化：单据拍照/OCR识别→自动录入系统→对账出报表</li>
          </ul>
        </section>

        <section id="production" className="section">
          <h2>内容生产组</h2>
          <div className="card-grid">
            <div className="card">
              <h3>📊 行业研究员</h3>
              <p>抓取本地新闻、政策、行业数据，筛选热门方向与高流量话题</p>
            </div>
            <div className="card">
              <h3>✍️ 文案策划师</h3>
              <p>适配小红书、YouTube、Facebook等平台风格，产出完整文案</p>
            </div>
            <div className="card">
              <h3>🎨 视觉设计师</h3>
              <p>制作封面图、缩略图、配图，统一品牌视觉规范</p>
            </div>
          </div>
        </section>

        <section id="automation" className="section">
          <h2>商家办公自动化</h2>
          <p>支持单据识别、数据核对、报表生成、客户跟进提醒，减少重复人工操作</p>
        </section>

        <section id="team" className="section">
          <h2>10个AI员工最终分工</h2>
          <p>涵盖内容生产、营销运营、客户服务、订单管理、财务对账全流程</p>
        </section>
      </main>

      {/* 底部页脚 */}
      <footer className="footer">
        <p>© 2026 AI-company-hub | 全链路AI自动化运营平台</p>
      </footer>
    </div>
  )
}

export default App
