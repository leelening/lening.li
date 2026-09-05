---
layout: single
permalink: /posts/docker/
permalink_name: /docker
title: Dockers as hosts
---

*To conveniently run different types of hosts in Mininet, it is a good idea to use Docker containers.*

The idea is from the work [1].

## Step 1: Installation

Requirement: Requires: **Ubuntu Linux 18.04 LTS** and **Python3**

```bash
$ sudo apt-get install ansible git aptitude
$ git clone https://github.com/containernet/containernet.git
$ cd containernet/ansible
$ sudo ansible-playbook -i "localhost," -c local install.yml
$ cd ..
```

You can switch between development (default) and normal installation as follows:

```bash
$ sudo make develop
# or 
$ sudo make install
```

## Step 2: Add Dockers instead of Hosts

Standard way to add hosts in Mininet:

```python
info( '*** Add hosts\n')
h3 = net.addHost('h3', cls=Host, ip='10.0.0.3', defaultRoute=None)
h4 = net.addHost('h4', cls=Host, ip='10.0.0.4', defaultRoute=None)
h2 = net.addHost('h2', cls=Host, ip='10.0.0.2', defaultRoute=None)
h1 = net.addHost('h1', cls=Host, ip='10.0.0.1', defaultRoute=None)
```

Instead of adding hosts into Mininet, we add docker containers into Mininets as hosts:

```python
info('*** Adding docker containers\n')
d1 = net.addDocker('d1', ip='10.0.0.251', dimage="ubuntu:trusty")
d2 = net.addDocker('d2', ip='10.0.0.252', dimage="ubuntu:trusty", cpu_period=50000, cpu_quota=25000)
d3 = net.addHost('d3', ip='11.0.0.253', cls=Docker, dimage="ubuntu:trusty", cpu_shares=20)
d4 = net.addDocker('d4', dimage="ubuntu:trusty", volumes=["/:/mnt/vol1:rw"])
```

#### Benefits: 

Compared to the standard way, using docker it is fast to deploy the network with different types of hosts. We are able to add different types of dockers.

### References:

1. M. Peuster, H. Karl, and S. v. Rossem: [**MeDICINE: Rapid Prototyping of Production-Ready Network Services in Multi-PoP Environments**](http://ieeexplore.ieee.org/document/7919490/). IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN), Palo Alto, CA, USA, pp. 148-153. doi: 10.1109/NFV-SDN.2016.7919490. (2016)

### Useful links:

1. https://github.com/containernet/containernet
2. https://www.talentica.com/blogs/using-docker-containers-as-mininet-hosts/: using docker container s mininet hosts