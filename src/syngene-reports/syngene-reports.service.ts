import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { userReportEntryExit } from './entity/syngene-entery-exist-user-report.entity';
import { EntryExitDTO } from './dtos/find-table';
import { userReportPrimaryModule } from './entity/syngene-gowning.entity';
import { userReportSub } from './entity/syngene-sub.entity';
import { Op } from 'sequelize';

@Injectable()
export class SyngeneReportsService {

    constructor(
        @Inject('userReportEntryExit') private userEntryExitRepository: typeof userReportEntryExit,
        @Inject('userReportPrimaryModule') private userReportPrimaryModuleRepository: typeof userReportPrimaryModule,
        @Inject('userReportSub') private userDataSubRepository: typeof userReportSub,

    ) { }


    async findEntryExitDataService(query:EntryExitDTO) {
        try {

            console.log("EntryExit",new Date(query.startDate))

            let findQuery ={ };

            if(query.skip && query.limit) {
                findQuery['offset'] = Number(query.skip),
                findQuery['limit'] = Number(query.limit)
            }

            if(query.startDate && query.endDate) {
                findQuery['where'] = {
                    date_time: {
                        [Op.between]: [query.startDate, query.endDate],
                    }
                }
            }

            if(query.userName) {
                findQuery['where']['Username'] = query.userName;
            }

            

            let data =  await this.userEntryExitRepository.findAll(findQuery);

            if(!data.length) {
                throw new NotFoundException({statusCode:404,success:false,message:"Data not found...!"});
            }

            return {
                sucess:true,
                data:data
            }


        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }
    }

    async findGowningReportService(query:EntryExitDTO) {
        try {

            let findQuery ={ };

            if(query.skip && query.limit) {
                findQuery['offset'] = Number(query.skip),
                findQuery['limit'] = Number(query.limit)
            }

            if(query.startDate && query.endDate) {
                findQuery['where'] = {
                    date_time: {
                        [Op.between]: [query.startDate, query.endDate],
                    }
                }
            }

            if(query.userName) {
                findQuery['where']['Username'] = query.userName;
            }

            console.log("Query",findQuery);

            let data =  await this.userReportPrimaryModuleRepository.findAll(findQuery);

            if(!data.length) {
                throw new NotFoundException({statusCode:404,success:false,message:"Data not found...!"});
            }

            return {
                sucess:true,
                data:data
            }


        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }
    }

    async findSyngeneSubData(query:EntryExitDTO) {
        try {

            let findQuery ={ };

            if(query.skip && query.limit) {
                findQuery['offset'] = Number(query.skip),
                findQuery['limit'] = Number(query.limit)
            }

            if(query.startDate && query.endDate) {
                findQuery['where'] = {
                    date_time: {
                        [Op.between]: [query.startDate, query.endDate],
                    }
                }
            }

            if(query.userName) {
                findQuery['where']['Username'] = query.userName;
            }

            console.log("Query",findQuery);

            let data =  await this.userDataSubRepository.findAll(findQuery);


            if(!data.length) {
                throw new NotFoundException({statusCode:404,success:false,message:"Data not found...!"});
            }

            return {
                sucess:true,
                data:data
            }


        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }
    }

    async calculateActiveUsersService() {
        try {

            let entryExitUser = await this.userEntryExitRepository.sequelize.query('SELECT COUNT(Username) FROM userReportEntryExit GROUP BY Username');

            let gowingUser = await this.userReportPrimaryModuleRepository.sequelize.query('SELECT COUNT(Username) FROM userReportPrimaryModule GROUP BY Username');

            let subUser = await this.userDataSubRepository.sequelize.query('SELECT COUNT(Username) FROM userDataSub GROUP BY Username');


            return {
                sucess:true,
                data:{
                    entryExitActiveUsers:entryExitUser[1] || 0,
                    gowingActiveUsers:gowingUser[1] || 0,
                    subActiveUsers:subUser[1] || 0
                }
            };
            
        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }

    }




    async createData(body) {

        return await this.userEntryExitRepository.create(body);

    }

}
