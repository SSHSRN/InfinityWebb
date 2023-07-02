using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemyAI : MonoBehaviour
{
    
    [SerializeField] Transform target;
    [SerializeField] float chaseRange = 5f;
    NavMeshAgent agent;
    float distanceToTarget = Mathf.Infinity;
    // Start is called before the first frame update
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();


        
    }

    // Update is called once per frame
    void Update()
    {
        distanceToTarget = Vector3.Distance(target.position, transform.position);
        if (distanceToTarget <= chaseRange)
        {
        
        
        agent.SetDestination(target.position);
    }
    }
}
