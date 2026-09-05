---
layout: single
permalink: /posts/mtd/
permalink_name: /mtd
title: Demonstration of IP addresses randomization (MTD) 
---

*Note that: Communication between real IP address is blocked & allows only communication on virtual IP addresses.*

## Mechanism: Randomization of IP addresses

1. Randomly sample an integer, termed as `pseudo_ran_num` from 0 - 32, where 32 is the number of available virtual IP addresses. 
2. Let the h1, h2, h3, h4's IP addresses to be the virtual IP addresses starting from `pseudo_ran_num` to `pseudo_ran_num + 3`
3. Wait until time out and go to the step 1.

In the future: we can predefine a set of real-virtual IP addresses mapping. We can introduce an probabilistic transition system, where each state of the transition system represents a predefined real-virtual IP addresses mapping.

## Step 1:

Build topology

1. Use the MiniEdit to build the topology of the network. To run MiniEdit, execute the command:

   ```bash
   $ sudo ~/mininet/examples/miniedit.py
   ```

   ![](/home/lening/Ubuntu_shared/mtd/h4s5c1.png)

   *Note that: controller c0 needs to be configured as remote controller, which you can modify in its property.*

## Step 2:

Dump flow rules to show no flow rules.

```bash
$ sudo ovs-ofctl dump-flows s1
```

The output of above command is:

```
cookie=0x0, duration=2.345s, table=0, n_packets=0, n_bytes=0, priority=0 actions=CONTROLLER:65535
```

## Step 3:

- Start the controller, this will install the table miss entry to all the switches.

  - ```bash
    $ ryu-manager yourapp.py
    ```

- Observe the initial real to virtual Mappings. For instance

  ```
  ('**********', {'10.0.0.4': '10.0.0.24', '10.0.0.1': '10.0.0.25', '10.0.0.3': '10.0.0.26', '10.0.0.2': '10.0.0.27'}, '***********')
  ```

  This means the current h1 is at IP address 10.0.0.25, h2 is at 10.0.0.27, etc..

- Check Flow rules.

  - This flow rule should be empty.

## Step 4:

- Initiate a ping from h1 to h3 using its virtual IP

```
mininet> h1 ping 10.0.0.14
```

*Note that IP address 10.0.0.14 is the virtual IP address for the h3.*

- Check flow rules
  - This flow rule should not be empty

## Step 5:

- Time out event initiates an update of the real-virtual IP mappings 

  ```
  ('**********', {'10.0.0.4': '10.0.0.28', '10.0.0.1': '10.0.0.29', '10.0.0.3': '10.0.0.30', '10.0.0.2': '10.0.0.31'}, '***********')
  ```

- Removes the initial flow rules from all the switches.

- Check flow rules.

  ```bash
  $ sudo ovs-ofctl dump-flows s1
  ```

  The output should be the following:

  ```
  cookie=0x0, duration=1.831s, table=0, n_packets=0, n_bytes=0, priority=0 actions=CONTROLLER:65535
  ```

  This means that the flow rule is emptied. 

## Step 6:

- Initiate a ping from h1 to h3 using its updated virtual IP address

  ```
  mininet> h1 ping 10.0.0.30
  ```

  *Note that current IP address for h3 is 10.0.0.30.*

- Check flow rules.

  - This flow should not be empty

## Step 7:

- Time out event initiates an update of the real-virtual IP mappings 

  ```
  ('**********', {'10.0.0.4': '10.0.0.28', '10.0.0.1': '10.0.0.29', '10.0.0.3': '10.0.0.30', '10.0.0.2': '10.0.0.31'}, '***********')
  ```

- Removes the initial flow rules from all the switches.

- Check flow rules.

  ```
  $ sudo ovs-ofctl dump-flows s1
  ```

  The output should be the following:

  ```
  cookie=0x0, duration=449.148s, table=0, n_packets=8, n_bytes=560, priority=0 actions=CONTROLLER:65535
  ```

## Step 8:

- Initiate a ping from h1 to h3 using its real IP address

  ```bash
  mininet> h1 ping 10.0.0.3
  ```

- See the packet being dropped.

  ```
  PING 10.0.0.3 (10.0.0.3) 56(84) bytes of data.
  From 10.0.0.1 icmp_seq=1 Destination Host Unreachable
  From 10.0.0.1 icmp_seq=2 Destination Host Unreachable
  From 10.0.0.1 icmp_seq=3 Destination Host Unreachable
  From 10.0.0.1 icmp_seq=4 Destination Host Unreachable
  From 10.0.0.1 icmp_seq=5 Destination Host Unreachable
  From 10.0.0.1 icmp_seq=6 Destination Host Unreachable
  ```

- Check flow rules.

- Packet will be dropped at the first switch itself.

### References:

1. Jafarian, J. H., Al-Shaer, E., & Duan, Q. (2012, August). Openflow random host mutation: transparent moving target defense using software defined networking. In *Proceedings of the first workshop on Hot topics in software defined networks* (pp. 127-132).

### Useful code links:

1. https://github.com/girishsg24/Moving-Target-Defense-RHM-using-SDN: I modified their controller for the IP address randomization
2. https://github.com/saberfeng/attack_mtd_emulation: 
3. https://github.com/itswindtw/mtd