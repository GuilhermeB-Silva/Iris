import { Header } from "../Main/Header/Index";
import { Status} from '../Main/Status/Index'

export function Main(){

    return(
        <main className="
        col-start-2 col-end-13 row-start-2 
        grid grid-cols-12 auto-rows-auto">
            
            <Header/>

            <div className="col-span-12 grid gap-2 grid-cols-3">
                <Status values={{statusType:'Online'}}/>
                <Status values={{statusType:'Atraso'}}/>
                <Status values={{statusType:'Offline'}}/>
            </div>
        </main>
    )
}