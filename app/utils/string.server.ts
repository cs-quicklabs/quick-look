export function nameCasing(name: string){
    name = name.charAt(0).toUpperCase() + name?.slice(1);
    return name 
}