
import { registor } from "./base/BasContainer";
import { DockerInstance } from "./instance/DockerInstance";
import {PodmanInstance} from './instance/PodmanInstance'
registor.addVm('docker',DockerInstance)
registor.addVm('podman',PodmanInstance)
/**
 * 获取容器
 * @param type 
 * @returns 
 */
export const getVm = <T>(type:string): T=>{
  return registor.getVm(type) as T
}