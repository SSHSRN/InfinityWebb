using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class AIController : MonoBehaviour
{
    public Transform[] waypoints;
    public float roamRadius = 10f;

    private NavMeshAgent agent;
    private int currentWaypointIndex;
    private bool isRoaming;

    private void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        currentWaypointIndex = 0;
        isRoaming = true;

        if (waypoints.Length == 0)
        {
            Debug.LogError("No waypoints assigned to AIController!");
            isRoaming = false;
        }
    }

    private void Update()
    {
        if (isRoaming)
        {
            if (!agent.pathPending && agent.remainingDistance < 0.5f)
            {
                SetNextWaypoint();
                MoveToNextWaypoint();
            }
        }
    }

    private void SetNextWaypoint()
    {
        currentWaypointIndex = (currentWaypointIndex + 1) % waypoints.Length;
    }

    private void MoveToNextWaypoint()
    {
        Vector3 randomPoint = GenerateRandomPointAroundWaypoint(waypoints[currentWaypointIndex].position, roamRadius);
        agent.SetDestination(randomPoint);
    }

    private Vector3 GenerateRandomPointAroundWaypoint(Vector3 center, float radius)
    {
        Vector3 randomDirection = Random.insideUnitSphere * radius;
        randomDirection += center;
        NavMeshHit hit;
        NavMesh.SamplePosition(randomDirection, out hit, radius, NavMesh.AllAreas);
        return hit.position;
    }
}
