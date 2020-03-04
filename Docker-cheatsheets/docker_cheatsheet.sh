## Basic commands for containerization (docker)
===============================================

# create image (must have Dockerfile)
docker build -t=image_name .

# list all images
docker image ls

# remove image
docker image rm image_id
docker image rm $(docker image ls -a -q) # Remove all images

# execute image
docker run image_name
docker run -d image_name        # run detached
docker run -it image_name bash  # run & attach
docker run -p host_port:guest_port image_name

# list of running containers
docker ps
docker container ls -a # all containers, incl. stopped

# attach to running container
docker exec -it container_id bash

# stop container
docker container stop container_id
docker container kill container_id

# remove container
docker container rm container_id
docker container rm $(docker container ls -a -q)  # Remove all containers

# create tag & push to hub
docker login
docker tag image_name user_id/repo_name:version_tag
docker push user_id/repo_name:version_tag

# pull and run from hub
docker run user_id/repo_name:version_tag


## Commands for running as a service/app (docker-compose)
=========================================================
# run app as service
docker-compose up -d
docker-compose down
docker stack deploy -c docker-compose.yml service_name

# list all apps
docker stack ls

# list all services
docker service ls
docker stack services service_name

# list tasks (list of containers running a service)
docker service ps service_name
docker stack ps service_name

# take down the service
docker stack rm service_name

## Commands for creating VMs (docker-machine)
=============================================

# create a VM
docker-machine create --driver virtualbox <vm_name>

# list all VMs
docker-machine ls

# start/stop/remove VMs
docker-machine start
docker-machine stop
docker-machine stop $(docker-machine ls -q)  # stop all running VMs
docker-machine rm $(docker-machine ls -q)    # delete all VMs and their disks

# SSH into VM
docker-machine ssh <vm_name>
docker-machine env <vm_name>    # then execute eval to connect to shell
eval $(docker-machine env -u)   # disconnect shell from VM

# run command inside VM
docker-machine ssh <vm_name> "command"

# SCP files to VM
docker-machine scp <file> <vm_name>:~

## Commands for creating a swarm/cluster
========================================

# create a swarm and denote current as manager
docker swarm init

# check swarm status (on manager)
docker node ls

# join a swarm as worker
docker swarm join --token <token> <master_ip>:2377

# exit swarm
docker swarm leave
docker swarm leave --f  # for master
