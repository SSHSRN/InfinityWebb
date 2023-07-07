using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemyAI : MonoBehaviour
{
    [SerializeField] Transform target;
    [SerializeField] float chaseRange = 5f;
    [SerializeField] float movementSpeed = 3f; // Speed control variable
    NavMeshAgent agent;
    float distanceToTarget = Mathf.Infinity;

    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        agent.speed = movementSpeed; // Set the initial movement speed
    }

    void Update()
    {
        distanceToTarget = Vector3.Distance(target.position, transform.position);
        if (distanceToTarget <= chaseRange)
        {
            agent.SetDestination(target.position);
        }
        else
        {
            // Stop the enemy when the target is out of range
            agent.ResetPath();
        }
    }

    // Function to update the movement speed
    public void SetMovementSpeed(float newSpeed)
    {
        movementSpeed = newSpeed;
        agent.speed = movementSpeed;
    }
}
