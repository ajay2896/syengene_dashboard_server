import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserReport_EntryExit } from './entity/syngene-entery-exist-user-report.entity';
import { EntryExitDTO } from './dtos/find-table';

@Injectable()
export class SyngeneReportsService {

    constructor(
        @Inject('UserReport_EntryExit') private userEntryExitRepository: typeof UserReport_EntryExit
    ) { }


    async findDataService(query:EntryExitDTO) {
        try {

            let findQuery ={
                offset:Number(query.skip),
                limit:Number(query.limit)
            };

            let data =  await this.userEntryExitRepository.findAll(findQuery);

            if(data.length) {

                if(query.userName) {
                    findQuery['where'] = { Username:query.userName}
                    data = await this.userEntryExitRepository.findAll(findQuery);

                    if(data.length) {
                        return {
                            success:true,
                            data:data
                        };
                    }

                } else {
                    return {
                        success:true,
                        data:data
                    };
                }  
            } else {
                throw new NotFoundException("Data does not found");
            }

        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }
    }
}
