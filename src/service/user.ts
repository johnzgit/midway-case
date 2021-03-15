import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
@Scope(ScopeEnum.Singleton)
export class UserService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;
  async getUser() {
    await this.photoModel.findOne();
    return 0;
  }
}
