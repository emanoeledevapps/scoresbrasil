import { CampeonatoProps2 } from "../interfaces";

export declare global{
    namespace ReactNavigation {
        interface RootParamsList{
            home: undefined;
            campeonato: CampeonatoProps2;
            tabela: undefined
        }
    }
}