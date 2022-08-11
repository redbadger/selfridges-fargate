import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import * as path from "path";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "SelfridgesFargateVpc", {
      maxAzs: 3, // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "SelfridgesFargateCluster", {
      vpc: vpc,
    });

    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "SelfridgesFargateDemo",
      {
        cluster: cluster,
        desiredCount: 1, // Default is 1,
        cpu: 512,
        memoryLimitMiB: 1024,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset(path.dirname("../../")),
          containerPort: 3000,
        },
        publicLoadBalancer: true, // Default is false,
        assignPublicIp: true,
      }
    );
  }
}
