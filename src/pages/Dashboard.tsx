import DashboardStyle from '@pages/Dashboard.module.css'

export const Dashboard = () =>{
    return (
        <div className={DashboardStyle.body}>
            <input type="checkbox" id='menu_onoff' className={DashboardStyle.menuonoff} />
            <nav className={DashboardStyle.nav}>
                <header>
                    <label htmlFor="menu_onoff" className={DashboardStyle.nav_menuonoff}>menu</label>
                </header>
            </nav>
            <main className={DashboardStyle.main}>
                <header className={DashboardStyle.header}>
                    <label htmlFor="menu_onoff" className={DashboardStyle.label}>menu</label>
                    <div>login</div>
                </header>
                <div className={DashboardStyle.contenedor}>
                    hola soy el contenedor
                </div>
            </main>
        </div>
    )
}